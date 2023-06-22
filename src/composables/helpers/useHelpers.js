export default function useHelpers() {
    return {
        generateImageUrl: (directory, fileName) => new URL(`../../assets/${directory}/${fileName}`, import.meta.url).href,
    };
}