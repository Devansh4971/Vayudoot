"use client"

import { useEffect, useState } from "react"

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })
    const [isExpired, setIsExpired] = useState(false)

    useEffect(() => {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24

        const calculateBirthday = () => {
            let today = new Date(),
                dd = String(today.getDate()).padStart(2, "0"),
                mm = String(today.getMonth() + 1).padStart(2, "0"),
                yyyy = today.getFullYear(),
                nextYear = yyyy + 1,
                dayMonth = "03-15", // Use ISO-compliant format
                birthday = `${yyyy}-${dayMonth}`

            today = new Date(`${yyyy}-${mm}-${dd}`) // Ensure today is a Date object

            if (today.getTime() > new Date(birthday).getTime()) {
                birthday = `${nextYear}-${dayMonth}`
            }

            return new Date(birthday).getTime()
        }

        const countDown = calculateBirthday()

        const interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countDown - now

            if (distance < 0) {
                clearInterval(interval)
                setIsExpired(true)
            } else {
                setTimeLeft({
                    days: Math.floor(distance / day),
                    hours: Math.floor((distance % day) / hour),
                    minutes: Math.floor((distance % hour) / minute),
                    seconds: Math.floor((distance % minute) / second),
                })
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] bg-black text-white p-4 sm:p-6 md:p-8">
            {isExpired ? (
                <div className="text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl pt-4 sm:pt-6 md:pt-8 font-bold mb-4" id="headline">
                        Forms are live for
                    </h1>
                </div>
            ) : (
                <div className="text-center">
                    <h1
                        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 pt-4 sm:pt-6 md:pt-8"
                        id="headline"
                    >
                        Forms are live for
                    </h1>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-center" id="countdown">
                        {[
                            { label: "Days", value: timeLeft.days },
                            { label: "Hours", value: timeLeft.hours },
                            { label: "Minutes", value: timeLeft.minutes },
                            { label: "Seconds", value: timeLeft.seconds },
                        ].map((item) => (
                            <div key={item.label} className="bg-white bg-opacity-10 rounded-lg p-2 sm:p-4">
                                <span className="text-2xl sm:text-3xl md:text-5xl font-bold" id={item.label.toLowerCase()}>
                                    {item.value}
                                </span>
                                <p className="text-xs sm:text-sm mt-1 sm:mt-2">{item.label}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 sm:mt-6 md:mt-10 font-semibold text-gray-400 text-sm sm:text-base md:text-lg">
                        <p>
                            Note: Every team is required to complete the registration process within this time period. Any technical
                            issues are meant to be discussed with us.
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

