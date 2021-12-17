function Dropdown({children, title}) {
    return (
        <details>
            <summary>{title}</summary>
            <div style={"padding-right: 1rem;"}>{children}</div>
        </details>
    );
}

export default Dropdown;
