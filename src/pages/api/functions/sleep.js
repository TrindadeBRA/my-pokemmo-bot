// sleep.js
export default function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ message: `Sleep ${ms}ms completed.` });
        }, ms);
    });
}
