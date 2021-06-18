import React, { Component } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import logo from './Resource/logo3.png'
export class Header extends Component {

    constructor(props) {
        super(props);

        this.items = [
            {
                // label: '',
                icon: 'pi pi-fw pi-facebook'
            },
            {
                // label: 'Edit',
                icon: 'pi pi-fw pi-twitter'
            },
            {
                // label: 'Users',
                icon: 'pi pi-fw pi-slack',
            },
            {
                // label: 'Events',
                icon: 'pi pi-fw pi-discord',
            },
            {
                // label: 'Quit',
                icon: 'pi pi-fw pi-youtube'
            }
        ];
    }

    render() {
        const start = <div><img className="logo" alt="logo" src={logo} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="p-mr-2"></img> </div>;
        const end = <Button label="Launch App Soon.." className="p-button-rounded p-button-secondary" />

        return (
            <div>
                <div className="card">
                    <Menubar style={{width : "100vw"}} model={this.items} start={start} end={end} />
                </div>
            </div>
        );
    }
}