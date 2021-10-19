import {
    describe,
    test, 
    expect,
    jest
} from '@jest/globals'
import AppController from '../src/appController.js'

describe("#AppController test suite", () => {
    describe("#updateCurrentFiles", () => {
        const connManagerMock = {
            updateCurrentFiles: jest.fn()
        }

        const viewManagerMock = {
            updateCurrentFiles: jest.fn()
        }
        
        const appCtrl = new AppController({
            connectionManager: connManagerMock,
            viewManager: viewManagerMock,
            dragAndDropManager: jest.fn(), 
        })

        test("it should fetch the files and pass them to the viewManager", async () => {
            const files = [{}, {}]
            jest.spyOn(appCtrl.connectionManager, 'updateCurrentFiles')
                .mockReturnValue(files)
            jest.spyOn(appCtrl.viewManager, 'updateCurrentFiles')

            await appCtrl.updateCurrentFiles()

            expect(appCtrl.connectionManager.updateCurrentFiles).toHaveBeenCalledTimes(1)
            expect(appCtrl.viewManager.updateCurrentFiles).toHaveBeenCalledTimes(1)
            expect(appCtrl.viewManager.updateCurrentFiles).toHaveBeenCalledWith(files)
        })
    })

    describe("#onFileChange" , () => {

    })

    describe("#updateProgress" , () => {

    })
    
    describe("#onProgress" , () => {

    })
})