export const useChangePageBg = () => {
	if(general.pageBg === "page_black") {
		general.pageBg = "page_white"
	} else {
		general.pageBg = "page_black"
	}

}