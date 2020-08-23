export const getTime = () => {
	// DATE
	const now: number = new Date().getHours()

	// RETORNAR ESTADO
	if (now >= 9 && now < 13) return true
	else if (now >= 14 && now < 17) return true
	else return false
}
