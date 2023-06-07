import React from 'react';
import style from './Task.module.css';

const Task = () => {
    return (
        <div>
            <div className={style.wrapper}>
                <section>
                    <div className={style.container}>
                        <h1>Задания</h1>
                        <div className={style.class_box}>
                            <div className={style.btn_class}>
                                <button className={style.btn_inn_profile} id="class-btn">Класс 4В{/*<img src="{% static 'my_classes/images/svg/arrow.svg' %}">*/}</button>
                            </div>
                            <div className={style.profile_box}>
                                <div className={style.student_box}>
                                    <div className={style.student_img}>
                                        {/* <img src="{% static 'my_classes/images/jpg/profile-img-ex.jpg' %}"> */}
                                    </div>
                                    <div className={style.student_name}>Петрова Александра</div>
                                    <div className={style.student_deletee}>
                                        {/* <img src="{% static 'my_classes/images/svg/delete.svg' %}"> */}
                                    </div>
                                </div>
                                <div className={style.student_box}>
                                    <div className={style.student_img}>
                                        {/* <img src="{% static 'my_classes/images/jpg/profile-img-ex.jpg' %}"> */}
                                    </div>
                                    <div className={style.student_name}>Петрова Александра</div>
                                    <div className={style.student_deletee}>
                                        {/* <img src="{% static 'my_classes/images/svg/delete.svg' %}"> */}
                                    </div>
                                </div>
                                <div className={style.student_box}>
                                    <div className={style.student_img}>
                                        {/* <img src="{% static 'my_classes/images/jpg/profile-img-ex.jpg' %}"> */}
                                    </div>
                                    <div className={style.student_name}>Петрова Александра</div>
                                    <div className={style.student_deletee}>
                                        {/* <img src="{% static 'my_classes/images/svg/delete.svg' %}"> */}
                                    </div>
                                </div>
                                <div className={style.student_add}>
                                    <span>Добавить ученика:</span>

                                    <button className={style.btn_inn_profile}> {/*<img class="plus-img" src="{% static 'my_classes/images/svg/plus.svg' %}">*/}Добавить</button>
                                </div>
                            </div>
                        </div>
                        <div className={style.class_box}>
                            <button className={style.btn_inn_profile} id="class-btn">Класс 5А{/*<img src="{% static 'my_classes/images/svg/arrow.svg' %}">*/}</button>
                            <div className={style.profile_box}>
                                <div className={style.student_box}>
                                    <div className={style.student_img}>
                                        {/* <img src="{% static 'my_classes/images/jpg/profile-img-ex.jpg' %}"> */}
                                    </div>
                                    <div className={style.student_name}>Петрова Александра</div>
                                    <div className={style.student_deletee}>
                                        {/* <img src="{% static 'my_classes/images/svg/delete.svg' %}"> */}
                                    </div>
                                </div>
                            </div>
                            <div className={style.student_add}>
                                <span>Добавить ученика:</span>

                                <button className={style.btn_inn_profile}>{/* <img src="{% static 'my_classes/images/svg/plus.svg' %}">*/}Добавить</button>
                            </div>
                        </div>
                    </div>
                    <div className={style.class_box}>
                        <button className={style.btn_inn_profile} id="class-btn">{/* <img src="{% static 'my_classes/images/svg/plus.svg' %}">*/}Добавить класс</button>
                    </div>
                </section>
            </div >
        </div>
    );
}


export default Task