export default interface SlideItem {
    imageUrl: string;
    title: string;
    description: string;
    action: {
      label: string,
      link: string
    }
  }

export default interface AboutProps {
    imageSrc: string;
    restaurantName: string;
    description: string;
  }
  