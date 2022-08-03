import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "antd/dist/antd.less"
import AppProvider from 'providers/AppProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppProvider />
)
