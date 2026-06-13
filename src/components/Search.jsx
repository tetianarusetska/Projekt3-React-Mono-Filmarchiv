import { useState } from "react"

export default function Search({ onSearch }) {

    const [value, setValue] = useState("");

    function handleChange(e) {

        const newValue = e.target.value;

        setValue(newValue);
        onSearch(newValue);
    }

    return <div
        className="mt-20 flex justify-center items-center"
    >
        <input
            value={value}
            onChange={handleChange}
            type="search"
            className="border border-(--mainColor) w-100 h-7.5 rounded-sm"
        />
        <button>
            <img
                src="/icons/dark_search.png"
                className="absolute -translate-y-3.5 right-133 w-7 h-7"
            />
        </button>
    </div>
}