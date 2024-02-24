import '../styles/CreateTripModal.css'

import {  getWithin15Date } from '@/shared/lib/helpers'
import { Input, Modal } from '@/shared/ui'


const {startDate} = getWithin15Date(new Date())

export const CreateTripModal = ({ ...otherProps }) => {
    
    return (
        <Modal {...otherProps}>
            <form className="createTripModal" autoComplete="off" onSubmit={console.log}>
                <Input
                    label='City'
                    placeholder='Select city'
                    // onChange={(e) => setGuests(+e.target.value)}
                    name="guests"
                    type="number"
                    min="1"
                    fullWidth
                    required
                />
                <Input
                    label='Start date'
                    placeholder='Select date'
                    name="date"
                    type="date"
                    min={startDate}
                    // max={endDate}
                    // onChange={(e) => setDate(e.target.value)}
                    fullWidth

                    required
                />
                <Input
                    label='End date'
                    placeholder='Select date'
                    name="date"
                    type="date"
                    min={startDate}
                    // max={endDate}
                    // onChange={(e) => setDate(e.target.value)}
                    fullWidth
                    required
                />
            </form>
        </Modal>
    )
}

