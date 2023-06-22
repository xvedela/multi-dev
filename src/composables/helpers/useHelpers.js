// Image Url Generator
class IUG {
    constructor() {
        this.url = '../../assets/';
    }

    setDirectory = (directory) => this.url += directory;

    generateImageUrl = (fileName) => new URL(`${this.url}/${fileName}`, import.meta.url).href;
}

export default function useHelpers() {
    return {
        createIUG: () => new IUG(),
    };
}