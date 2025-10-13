"use client";

import Image from "next/image";
import React from "react";

type IconButtonProps = {
  iconSrc: string; // PNG path under public or remote URL
  alt: string; // used for accessibility and aria-label
  size?: number; // icon size in px (width=height)
  className?: string; // optional positioning classes supplied by caller
  disabled?: boolean;
  onClick?: () => void;
};

export default function IconButton({
  iconSrc,
  alt,
  size = 24,
  className = "",
  disabled = false,
  onClick,
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={alt}
      onClick={onClick}
      disabled={disabled}
      className={`appearance-none bg-transparent border-0 p-0 m-0 inline-block leading-none ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      <Image src={iconSrc} alt={alt} width={size} height={size} />
    </button>
  );
}
