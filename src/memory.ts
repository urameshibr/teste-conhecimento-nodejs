export function getMemoryUsage() {
    let memoryUsage: any = process.memoryUsage();
    for (let key in memoryUsage) {
        console.log(`${key} ${Math.round(memoryUsage[key] / 1024 / 1024 * 100) / 100} MB`);
    }
}

