import { Readable, Writable, Transform } from 'stream'
export default class TestUtil {

    static generateReadableStream(data) {
        return new Readable({
            async read() {
                for (const item of data) {
                    this.push(item)
                }

                this.push(null)
            }
        })
    }

    static generateWritebleStream(onData) {
        return new Writable({
            write(chunck, encoding, cb) {
                onData(chunck)
                cb(null, chunck)
            }
        })
    }

    static generateTransformStream(onData) {
        return new Transform({
            transform(chunck, enconding, cb) {
                onData(chunck)
                cb(null, chunck)
            }
        })
    }
    
}