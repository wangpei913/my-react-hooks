/**
 * 滑动锚点组件
 */

import React, { useRef, useEffect } from 'react';

function Anchor() {
    const containerRef = useRef(null);
    const catalog = {
        '第一大点': [{ id: 'a', content: '内容a' }, { id: 'b', content: '内容b' }, { id: 'c', content: '内容c' }],
        '第二大点': [{ id: 'd', content: '内容d' }, { id: 'e', content: '内容e' }, { id: 'f', content: '内容f' },]
    }
    const scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) {
                anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
            }
        }
    }
    const handleTitle = (id) => {
        scrollToAnchor(id)
    }
    useEffect(() => {
        console.log(window, 'w')
        const handleScroll = (e) => {
            console.log(e, 'e')
        }
        containerRef.current.addEventListener("scroll", handleScroll);
    }, [])
    return (
        <div className="anchor" ref={containerRef}>
            <div className="anchor-left">
                {Object.keys(catalog).map(item => {
                    return catalog[item].map(content => {
                        return <span id={content.id} className="content-span" key={content.id}>{content.content}</span>
                    })
                })}
            </div>
            <div className="anchor-right">
                <h4>目录</h4>
                <div className="catalog">
                    {
                        Object.keys(catalog).map(item => {
                            return (
                                <React.Fragment key={item}>
                                    <h3 key={item}>
                                        {item}
                                    </h3>
                                    {catalog[item].map((child, index) => {
                                        return <span onClick={() => handleTitle(child.id)} className="child-span" key={child.id}>{`${index + 1}、${child.content}`}</span>
                                    })}
                                </React.Fragment>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Anchor;