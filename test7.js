{isPersonAlice ? (
    <TaskCounter key="alice" name="Alice" />
     ) : (
    <TaskCounter key="bob" name="Bob" />
    )}

// Because React Reconciliation. When the key changes, React treats it as a completely different component.
