import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
        <TopBox></TopBox>
        <Title>BR</Title>
        <List>introduce</List>
        <List>web</List>
        <List>artwork</List>
        <List>illustrate</List>
        <List>contact</List>

        <TextWrapper>
            <Text>I change myself with constant thought and effort.
            Even if I can't be a global influencer,</Text>
            <Text>My dream is to help the precious person around me first
            so that I can change it.</Text>
        </TextWrapper>

        <LinkWrapper>
            <div>git icon</div>
            <div>tistory icon</div>
        </LinkWrapper>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
    margin-left: 100px;
    width: 30%;
    height: 100vh;
    display : flex;
    flex-direction: column;
    justify-content: space-between;
`;

const TopBox = styled.div`
    width: 100px; height: 20px;
    background-color: #411E86;
    margin-bottom: 100px;
`;

const Title = styled.span`
    font-size: 80px;
    font-weight: 800;
    color: #411E86;
    margin-bottom: 50px;
    &:hover{
        cursor: pointer;
    }
`;

const List = styled.span`
    font-size: 30px;
    font-weight: 600;
    color:#7371B3;
    margin-bottom: 10px;
    &:hover{
        cursor: pointer;
        color: #411E86;
    }
`;

const TextWrapper = styled.div`
    max-width: 100%;
    margin: 15px 0px 30px 0px;
    font-size: 15px;
`;

const Text = styled.p`
    margin-bottom: 8px;
`;

const LinkWrapper = styled.div`
    margin-bottom: 80px;
    display: flex;
    justify-content: space-between;
`;