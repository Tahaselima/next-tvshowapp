export function runtime(runtime) {
    const hours = Math.floor(runtime / 60);
    return `${hours}h ${runtime - (hours * 60)}m`;
}