import {TestBed, inject} from '@angular/core/testing'
import {ModalService} from './modal.service'

xdescribe('ModalService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ModalService]
        })
    })

    it('should ...', inject([ModalService], (service: ModalService) => {
        expect(service).toBeTruthy()
    }))
})
