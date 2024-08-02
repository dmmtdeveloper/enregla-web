
const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-semibold text-[36px] xl:text-7xl dark:text-white text-black-100 leading-[76.8px] xl:leading-[66.8px] w-full",
    paragraph: "font-normal dark:text-white text-[18px] leading-[30.8px] text-black-100",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex pt-10 items-start xl:mt-20",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;