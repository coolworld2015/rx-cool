'use strict';

import React, {Component} from 'react';
import {hashHistory} from 'react-router';

class Main extends Component {
    constructor(props) {
        super(props);
		this.addItem();
    }
	
	goSearch() {
		hashHistory.push("/search");
	}
	
	goPhones() {
		hashHistory.push("/phones");
	}	
	
	goUsers() {
		hashHistory.push("/users");
	}
	
	goAudit() {
		hashHistory.push("/audit");
	}
	
	onLogOut() {
        appConfig.onLogOut();
    }
	
    addItem() {
        this.setState({
            showProgress: true
        });

        fetch(appConfig.url + 'api/audit/add', {
            method: 'post',
            body: JSON.stringify({
                id: + new Date,
                name: 'user',
                description: 'description'
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response)=> response.json())
            .then((responseData)=> {
				if (responseData.id) {
					hashHistory.push("/main");
				} else {
					this.setState({
						serverError: true,
						showProgress: false
					});
				}
            })
            .catch((error)=> {
                this.setState({
                    serverError: true,
					showProgress: false
                });
            }) 
    }
	
    render() {
		return (
			<div style={{backgroundColor: 'black', color: 'white', fontSize: 24, textAlign: 'center'}}>
				<div style={{fontSize: 44, fontWeight: 'bold'}}>
					CoolWorld <hr/>
					<img src="./react.gif" style={{width:400}} />
					<hr />
				</div>

				<div>
					<div>
						Компания CoolWorld разрабатывает приложения Android и iOS любого уровня сложности для работы с базами данных и готовыми учетными системами.
					</div>	
					<br /> 
					Примеры работ для Android: <a href="https://play.google.com/store/apps/details?id=io.cordova.ui_warehouse" 
						target="_blank" 
						style={{color: 'blue'}}>Google play market</a>
					<br /> 
					Примеры работ для iOS: <a href="https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1154030318&mt=8" 
						target="_blank" 
						style={{color: 'blue'}}>App store</a> 

					<br /><br />
					Наши контакты:<br />
						Тел.: +38-067-230-86-15<br />
						E-mail: olegsherbak@ukr.net
					<br /><br />
					Будем рады сотрудничать!<hr />
				</div>
			</div>
		)
    }
}

export default Main;