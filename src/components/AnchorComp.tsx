import React from 'react'
import { Anchor } from 'antd';
const { Link } = Anchor;

export default function AnchorComp() {
    return (
        <Anchor>
            <Link href="#components-anchor-demo-basic" title="Basic demo" />
            <Link href="#components-anchor-demo-static" title="Static demo" />
            <Link href="#api" title="API">
                <Link href="#anchor-props" title="Anchor Props" />
                <Link href="#link-props" title="Link Props" />
            </Link>
        </Anchor>
    )
}