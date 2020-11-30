import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router'
import LinkList from './LinkList';

describe("LinkList component", () => {
    it('renders LinkList component to render with list', () => {
        const linklist = renderer.create(<MemoryRouter><LinkList linkPrefix={""} linkCollection={[{ id: 1, name: 'test' }]} /></MemoryRouter>).toJSON();
        expect(linklist).toMatchSnapshot();
    });
    it('renders LinkList component to render with empty list', () => {
        const linklist = renderer.create(<MemoryRouter><LinkList linkPrefix={""} linkCollection={[]} /></MemoryRouter>).toJSON();
        expect(linklist).toMatchSnapshot();
    });
})