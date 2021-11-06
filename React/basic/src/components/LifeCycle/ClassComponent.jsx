import React, { Component } from 'react'

/**
 * constructor : state 초기화, 메서드 바인딩
 * componentDidMount : Dom 노드 초기화 및 데이터 fetch
 * componentWillUnmount : 타이머 제거 및 요청 취소 및 구독 해제
 * 
 * 생성 : constructor > render > componentDidMount
 * 업데이트 : render > componentDidUpdate
 * 제거 : componentWillUnmount
 */

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {date: new Date()};
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
        
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.timerId);
    }

    tick() {
        console.log('tick');
        this.setState({date: new Date()});
    }

    render() {
        return (
            <div>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
