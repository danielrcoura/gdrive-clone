export default class ConnectionManager {
    constructor({ apiUrl }) {
        this.apiUrl = apiUrl

        this.ioClient = io.connect(apiUrl, { withCredentials: false })
    }

    configureEvents({ onProgress }) {
        this.ioClient.on('file-upload', onProgress)
    }

    async uploadFile(file) {
        const formData = new FormData()
        formData.append('files', file)

        const response = await fetch(`${this.apiUrl}?socketId=${this.ioClient.id}`, {
            method: 'POST',
            body: formData
        })

        return response.json()
    }

    async updateCurrentFiles() {
        const files = (await (await fetch(this.apiUrl)).json())
        return files
    }
}