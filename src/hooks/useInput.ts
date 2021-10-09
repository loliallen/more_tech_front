import { useState } from "react"

const useInput = <T = any>(
    initavalue: T | any = null,
) => {
    const [value, setValue] = useState<T>(initavalue);

    const onChange = (e: any) => setValue(e.target.value);
    const cleanup = (v: T | any = null) => setValue(v);
    return {
        bind: {
            value,
            onChange,
        },
        value,
        setValue,
        cleanup,
    };
};

export default useInput