import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactNode, VFC } from "react";
import type { UrlObject } from "url";

declare type Url = string | UrlObject;

type Props = {
  children: ReactNode;
  className?: string;
  href: Url;
  icon?: IconProp;
  tabIndex?: number;
  testId: string;
};

export const RouterLink: VFC<Props> = (props) => {
  const router = useRouter();
  const activeClass = "mb-[-3px]";
  const activeClasses = props.className
    ? `${props.className} ${activeClass}`
    : activeClass;

  return (
    <Link href={props.href} passHref>
      <span className="inline-flex items-center cursor-pointer">
        {props.icon && <FontAwesomeIcon icon={props.icon} className="mr-3" />}
        <a
          className={
            router.asPath === props.href ? activeClasses : props.className
          }
          tabIndex={props.tabIndex}
          data-testid={props.testId}
        >
          {props.children}
        </a>
      </span>
    </Link>
  );
};
