import React, {useState} from 'react';
import styles from './UserInfo.module.css';
import cn from "classnames";

function UserInfo(props) {
    const [showFullComment, setShowFullComment] = useState(false);
    const toggleComment = () => {
        setShowFullComment(!showFullComment);
    };
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <img className={styles.avatar} src={props.heading.avatar} alt="фото пользователя" width={42}
                     height={42}/>
                <div className={styles.content}>
                    <p className={styles.name}>{props.heading.FLName}</p>
                    <div className={styles.raiting}>
                        <svg className={styles.star}> width="61" height="12" viewBox="0 0 61 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.9058 10.0564C6.65535 9.90901 6.34465 9.90901 6.0942 10.0564L4.31127 11.1058C3.71897 11.4545 2.99178 10.9432 3.11938 10.2679L3.54032 8.03988C3.59015 7.77611 3.50437 7.50492 3.31191 7.31779L1.69435 5.74502C1.21324 5.27724 1.48716 4.46064 2.15304 4.3776L4.26892 4.11373C4.5486 4.07886 4.78929 3.89938 4.90252 3.64128L5.7674 1.66988C6.04736 1.03175 6.95264 1.03175 7.2326 1.66988L8.09748 3.64128C8.21071 3.89938 8.4514 4.07886 8.73108 4.11373L10.847 4.3776C11.5128 4.46064 11.7868 5.27724 11.3056 5.74502L9.68809 7.31779C9.49563 7.50492 9.40985 7.77611 9.45968 8.03988L9.88062 10.2679C10.0082 10.9432 9.28104 11.4545 8.68873 11.1058L6.9058 10.0564Z"
                                fill="#FFBF0F"/>
                            <path
                                d="M18.9058 10.0564C18.6553 9.90901 18.3447 9.90901 18.0942 10.0564L16.3113 11.1058C15.719 11.4545 14.9918 10.9432 15.1194 10.2679L15.5403 8.03988C15.5902 7.77611 15.5044 7.50492 15.3119 7.31779L13.6944 5.74502C13.2132 5.27724 13.4872 4.46064 14.153 4.3776L16.2689 4.11373C16.5486 4.07886 16.7893 3.89938 16.9025 3.64128L17.7674 1.66988C18.0474 1.03175 18.9526 1.03175 19.2326 1.66988L20.0975 3.64128C20.2107 3.89938 20.4514 4.07886 20.7311 4.11373L22.847 4.3776C23.5128 4.46064 23.7868 5.27724 23.3056 5.74502L21.6881 7.31779C21.4956 7.50492 21.4098 7.77611 21.4597 8.03988L21.8806 10.2679C22.0082 10.9432 21.281 11.4545 20.6887 11.1058L18.9058 10.0564Z"
                                fill="#FFBF0F"/>
                            <path
                                d="M30.9058 10.0564C30.6553 9.90901 30.3447 9.90901 30.0942 10.0564L28.3113 11.1058C27.719 11.4545 26.9918 10.9432 27.1194 10.2679L27.5403 8.03988C27.5902 7.77611 27.5044 7.50492 27.3119 7.31779L25.6944 5.74502C25.2132 5.27724 25.4872 4.46064 26.153 4.3776L28.2689 4.11373C28.5486 4.07886 28.7893 3.89938 28.9025 3.64128L29.7674 1.66988C30.0474 1.03175 30.9526 1.03175 31.2326 1.66988L32.0975 3.64128C32.2107 3.89938 32.4514 4.07886 32.7311 4.11373L34.847 4.3776C35.5128 4.46064 35.7868 5.27724 35.3056 5.74502L33.6881 7.31779C33.4956 7.50492 33.4098 7.77611 33.4597 8.03988L33.8806 10.2679C34.0082 10.9432 33.281 11.4545 32.6887 11.1058L30.9058 10.0564Z"
                                fill="#FFBF0F"/>
                            <path
                                d="M42.9058 10.0564C42.6553 9.90901 42.3447 9.90901 42.0942 10.0564L40.3113 11.1058C39.719 11.4545 38.9918 10.9432 39.1194 10.2679L39.5403 8.03988C39.5902 7.77611 39.5044 7.50492 39.3119 7.31779L37.6944 5.74502C37.2132 5.27724 37.4872 4.46064 38.153 4.3776L40.2689 4.11373C40.5486 4.07886 40.7893 3.89938 40.9025 3.64128L41.7674 1.66988C42.0474 1.03175 42.9526 1.03175 43.2326 1.66988L44.0975 3.64128C44.2107 3.89938 44.4514 4.07886 44.7311 4.11373L46.847 4.3776C47.5128 4.46064 47.7868 5.27724 47.3056 5.74502L45.6881 7.31779C45.4956 7.50492 45.4098 7.77611 45.4597 8.03988L45.8806 10.2679C46.0082 10.9432 45.281 11.4545 44.6887 11.1058L42.9058 10.0564Z"
                                fill="#FFBF0F"/>
                            <path
                                d="M54.9058 10.0564C54.6553 9.90901 54.3447 9.90901 54.0942 10.0564L52.3113 11.1058C51.719 11.4545 50.9918 10.9432 51.1194 10.2679L51.5403 8.03988C51.5902 7.77611 51.5044 7.50492 51.3119 7.31779L49.6944 5.74502C49.2132 5.27724 49.4872 4.46064 50.153 4.3776L52.2689 4.11373C52.5486 4.07886 52.7893 3.89938 52.9025 3.64128L53.7674 1.66988C54.0474 1.03175 54.9526 1.03175 55.2326 1.66988L56.0975 3.64128C56.2107 3.89938 56.4514 4.07886 56.7311 4.11373L58.847 4.3776C59.5128 4.46064 59.7868 5.27724 59.3056 5.74502L57.6881 7.31779C57.4956 7.50492 57.4098 7.77611 57.4597 8.03988L57.8806 10.2679C58.0082 10.9432 57.281 11.4545 56.6887 11.1058L54.9058 10.0564Z"
                                fill="#FFBF0F"/>
                        </svg>
                        <p className={styles.raitingNum}>5.0</p>
                    </div>
                </div>


                <p className={styles.comment}>
                    {showFullComment ? props.review.comment : `${props.review.comment.slice(0, 120)}${!showFullComment && props.review.comment.length > 120 ? '...' : ''}`}
                    {!showFullComment && props.review.comment.length > 120 && (
                        <div className={styles.more}>
                            <p className={styles.textMore} onClick={toggleComment}>читать больше</p>
                            <svg onClick={toggleComment} width="19" height="18" viewBox="0 0 19 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.25695 5.81836L4.19629 6.87902L9.49958 12.1823L14.8029 6.87904L13.7422 5.81838L9.49959 10.061L5.25695 5.81836Z"
                                    fill="#8C8F9A"/>
                            </svg>
                        </div>
                    )}
                    {showFullComment && (
                        <div className={styles.more}>
                            <p className={styles.textMore} onClick={toggleComment}>свернуть</p>
                            <svg onClick={toggleComment} width="19" height="18" viewBox="0 0 19 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.25695 5.81836L4.19629 6.87902L9.49958 12.1823L14.8029 6.87904L13.7422 5.81838L9.49959 10.061L5.25695 5.81836Z"
                                    fill="#8C8F9A"/>
                            </svg>
                        </div>
                    )}

                </p>
            </div>


        </>

    );
}

export default UserInfo;
