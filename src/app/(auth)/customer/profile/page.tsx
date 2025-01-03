"use client"
import customerGuard from "@/hoc/customerGuard"

function profile() {
    return (
        <div className="bg-accent text-white">
            <h1>Profile</h1>
        </div>
    )
}

export default customerGuard(profile)