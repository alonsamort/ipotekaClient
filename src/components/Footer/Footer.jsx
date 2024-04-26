import React from 'react';
import styles from './Footer.module.css';
import cn from "classnames";
import {footer} from "./data";

function Footer(props) {
    const { hideContentGrid } = props;
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                {!hideContentGrid && (
                <div className={styles.contentGrid}>
                    <div className={styles.brandSection}>
                        <p className={styles.title}>{footer.title}</p>
                        <p className={styles.subtitle}>{footer.subtitle}</p>
                        <div className={styles.socialIcons}>
                            {footer.socialIcons.map((icon, index) => (
                                <a key={index} href={icon.url} className={styles.iconLink}>
                                    {icon.iconElement}
                                </a>
                            ))}
                        </div>
                    </div>

                    {footer.sections.map((section) => (
                        <div className={styles.section}>
                            <p className={styles.sectionTitle}>{section.title}</p>
                            {section.items.map((item, index) => (
                                <a key={index} href={item.url} className={styles.item}>
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    ))}

                </div>
                )}
                <div className={styles.organizationalInfo}>
                    {footer.organizationDetails.map((detail, index) => (
                        <p key={index} className={styles.detail}>{detail}</p>
                    ))}
                </div>

            </div>
        </>

    );
}

export default Footer;
