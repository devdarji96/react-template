import './Expenses.css';
import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"

const Expenses = (props) => {

    return <div>
        <Card className="expenses">
            {props.items.map((expense) =>
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            )}
        </Card>
    </div>
}

export default Expenses;