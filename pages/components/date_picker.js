import DatePicker from "react-datepicker"

export default function DateBox(props) {
    return (
        <DatePicker className="border-2"
        selected={props.selectedDate}
        onChange={(date) => props.setSelectedDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        timeCaption="time"
        dateFormat="MM/dd/yyyy h:mm aa"
        />
    )
}