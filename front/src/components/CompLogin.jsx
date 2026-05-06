import React, { useState, useRef } from 'react';
import { postFetchData } from '../util/fetchDatas.js';

export default function CompLogin() {
    const initForm = { id: '', pwd: '' };
    const [form, setForm] = useState(initForm);
    const idRef = useRef(null);
    const pwdRef = useRef(null);

    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        if(idRef.current.value === ''){
            alert('아이디를 입력해주세요')
        } else if(pwdRef.current.value === '') {
            alert('비밀번호를 입력해주세요')
        } else {
            console.log('서버전송', form);
            const jsonData = await postFetchData('/api/post', form);
            jsonData.result ? alert('전송 성공') : alert('전송 실패');
        }
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <ul>
                    <li>
                        <label htmlFor="id">아이디</label>
                        <input type="text" id='id' name='id' ref={idRef} value={form.id} onChange={handleFormChange}/>
                    </li>
                    <li>
                        <label htmlFor="pwd">비밀번호</label>
                        <input type="text" id='pwd' name='pwd' ref={pwdRef} value={form.pwd} onChange={handleFormChange}/>
                    </li>
                    <li>
                        <button type='submit'>Login</button>
                        <button type='button' onClick={() => setForm(initForm)}>다시쓰기</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

