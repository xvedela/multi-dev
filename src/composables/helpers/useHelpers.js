// Image Url Generator (used before API)
class IUG {
    constructor() {
        this.url = '../../assets/';
    }

    setDirectory = (directory) => this.directory = directory;

    generateImageUrl = (fileName) => new URL(`${this.url}/${this.directory}/${fileName}`, import.meta.url).href;

}

export default function useHelpers() {
    return {
        createIUG: () => new IUG(),
    };
}