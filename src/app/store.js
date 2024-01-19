import { configureStore } from "@reduxjs/toolkit";
import appointmentSlice from "../features/appointment/appointmentSlice";
import toUpdateAppointmentSlice from "../features/appointment/toUpdateAppointmentSlice";

export const store = configureStore({
    reducer:{
        Appointments:appointmentSlice,
        updateState:toUpdateAppointmentSlice
    }
})