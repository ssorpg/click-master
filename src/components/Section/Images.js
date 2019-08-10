function importAll(r) {
    return r.keys().map(r);
}

let Images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

Images = Images.map((img, id) => {
    return {
        src: img,
        id: id
    };
});

export default Images;
