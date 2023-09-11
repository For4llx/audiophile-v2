import React from "react";
import Image from "next/image";
import styles from "./BasePicture.module.scss";

interface IBasePicture {
  sourceLarge: string;
  sourceMedium?: string;
  sourceSmall?: string;
  alt: string;
}

const BasePicture: React.FC<IBasePicture> = ({
  sourceLarge,
  sourceMedium,
  sourceSmall,
  alt,
}) => {
  return (
    <picture>
      <source srcSet={sourceLarge} media="(min-width:769px)" />
      <source srcSet={sourceMedium} media="(min-width: 481px)" />
      <source srcSet={sourceSmall} />
      <Image src={sourceLarge} alt={alt} fill className={styles.image} />
    </picture>
  );
};

export default BasePicture;
