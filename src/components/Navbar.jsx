import React, { useEffect, useState } from 'react'
import { Button, Menu, Avatar, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { MenuOutlined, HomeOutlined, MoneyCollectFilled, BulbOutlined, FundOutlined } from '@ant-design/icons'
import MenuItem from 'antd/lib/menu/MenuItem'
import icon from '../images/cryptocurrency.png'


const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [screenSize, setScreenSize] = useState(null)

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (screenSize < 768) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    }, [screenSize])



    return (
        <div className='navbar-container'>
            <div className="logo-container">
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>Crypt Mart</Link>
                </Typography.Title>
                <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined />
                </Button>
            </div>

            {activeMenu && (
                <Menu theme='dark'>
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to='/'>Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectFilled />}>
                        <Link to='/exchanges'>Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />}>
                        <Link to='/news'>News</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        <Link to='/'>Fund</Link>
                    </Menu.Item>
                </Menu>
            )}

        </div>
    )
}

export default Navbar