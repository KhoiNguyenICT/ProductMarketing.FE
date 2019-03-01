import { range } from 'lodash';
import { IImage } from 'src/types';

export const storage = {
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.warn('localStorage', e);
        }
    },

    get(key: string) {
        try {
            return JSON.parse(localStorage.getItem(key) || '');
        } catch (e) {
            console.warn('localStorage', e);
        }
    },

    remove(key) {
        localStorage.removeItem(key);
    },

    clear() {
        localStorage.clear();
    },
};

export const letter = (keycode: number) => {
    const valid = (keycode > 47 && keycode < 58) || // number keys
        keycode === 32 || keycode === 13 || // spacebar & return key(s) (if you want to allow carriage returns)
        (keycode > 64 && keycode < 91) || // letter keys
        (keycode > 95 && keycode < 112) || // numpad keys
        (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
        (keycode > 218 && keycode < 223);  // [\]' (in order)

    return valid ? String.fromCharCode(keycode) : '';
};

// compose(a, b, c) -> x -> a(b(c(x)))
export const compose = (...fns) => x => fns.reduceRight((acc, cur) => cur(acc), x);

/** execute all function */
export const runFn = (...fns) => () => fns.forEach(x => x());

export const merge = (...args) => Object.assign({}, ...args);

export const generatePagesArray = (pageToShow: number, totalPage: number, currentPage: number): Array<number> => {
    if (!totalPage || totalPage === 0) {
        return [];
    }
    if (pageToShow > totalPage) {
        return range(1, totalPage + 1);
    }

    const from = currentPage - Math.floor(pageToShow / 2);
    if (from <= 1) {
        return range(1, pageToShow + 1);
    }

    const to = currentPage + Math.floor(pageToShow / 2);
    if (to > totalPage) {
        return range(totalPage - pageToShow + 1, totalPage + 1);
    }

    if (pageToShow % 2) {
        return range(from, to + 1);
    }

    return range(from + 1, to + 1);
};

export const download = (url: string, name?: string) => {
    const anchor = document.createElement('a');
    anchor.setAttribute('download', name);
    anchor.setAttribute('href', url);
    anchor.click();
};

export const contains = <T>(arr: Array<T>, comparer: (T) => boolean) =>
    !!arr.filter(comparer).length;

export const fold = <T>(arr: Array<T>): T => arr[0];

export const assetSizeUrl = (asset: IImage, size: number) => {
    const keys = Object.keys(asset.thumbnails).map(t => +t).sort();
    for (const i of keys) {
        if (i >= this.imageSize) {
            return asset.thumbnails[i];
        }
    }
    return asset.thumbnails[keys[keys.length - 1]];
};
