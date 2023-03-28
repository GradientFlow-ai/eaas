import emojis from './emojis';

const randomEmoji = ()  => {
    const innerCollection = emojis[Math.floor(Math.random() * emojis.length)].emojis

    return innerCollection[Math.floor(Math.random() * innerCollection.length)].emoji

}

export default randomEmoji;
