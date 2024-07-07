export const handleError = (error) => {
    if (error.code) {
        switch (error.code) {
            case "23502":
                return {
                    code: 400,
                    msg: 'campo obligatorio'
                }
            case "23505":
                return {
                    code: 400,
                    msg: 'el registro ya existe'
                }
            default:
                return {
                    code: 500,
                    msg: 'error'
                }
        }
    }
}