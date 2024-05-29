const getCroppedImageUrl = (url: string, width: number = 600 , height: number = 400) => {
    //for dynamic image resizing
    //const splitUrl = url.split('/');
    //const imageName = splitUrl[splitUrl.length - 1];
    //const baseUrl = splitUrl.slice(0, splitUrl.length - 1).join('/');
    //return `${baseUrl}/${width}x${height}/${imageName}`;

    // Get optimized images from the url by crop it.
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    //return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
    return url.slice(0, index) + 'crop/' + width + '/' + height + '/' + url.slice(index);
}


export default getCroppedImageUrl;