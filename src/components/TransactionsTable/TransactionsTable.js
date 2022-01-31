import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EllipsisText from 'react-ellipsis-text';

// import { phonebookOperations, phonebookSelectors } from 'Redux/phonebook';
import styles from './TransactionsTable.module.css';
// import Modal from 'components/Modal';
// import EditTransaction from 'components/EditTransaction';
// import contextProps from 'context/context';

const TransactionsTable = () => {
  //   const { type, date, setNewDate } = useContext(contextProps);
  const dispatch = useDispatch();

  //   const transactions = useSelector(transactionsSelectors.getTransactions);
  //   const filteredTransactions = transactions.filter(item => item.type === type);
  //   const [modalDel, setModalDel] = useState(false);
  //   const [transaction, setTransaction] = useState('');

  //   useEffect(() => {
  //     dispatch(transactionsOperations.getTransactions());
  //   }, [dispatch]);

  //   const handleDeteteClick = transaction => {
  //     setModalDel(true);
  //     setTransaction(transaction._id);
  //   };

  //   const onDelCancel = () => {
  //     setTransaction('');
  //     setModalDel(false);
  //   };

  //   const onDelOk = () => {
  //     setModalDel(false);
  //     const transactionToDel = transactions.find(
  //       item => item._id === transaction,
  //     );
  //     dispatch(transactionsOperations.deleteTransaction(transactionToDel));
  //     setTransaction('');
  //   };

  return (
    <>
      {/* {modalDel && (
        <Modal
          modalTitle="Вы действительно хотите удалить эту запись?"
        //   handleClickRight={onDelCancel}
        //   handleClickLeft={onDelOk}
        //   onClose={onDelCancel}
        />
      )} */}

      <div className={styles.bodyTable}>
        <table className={styles.main}>
          <thead className={styles.theadTable}>
            <tr>
              <th className={`${styles.th} ${styles.thData}`}>Дата</th>
              <th className={`${styles.th} ${styles.thDesc}`}>Описание</th>
              <th className={`${styles.th} ${styles.thCateg}`}>Категория</th>
              <th className={`${styles.th} ${styles.thSum}`}>Сумма</th>
              <th className={`${styles.th} ${styles.thEmpty}`}></th>
            </tr>
          </thead>
        </table>
        <div className={styles.bodyTableScroll}>
          <table className={`${styles.main} ${styles.mainTbody}`}>
            <tbody className={styles.tbodyTable}>
              {/* {filteredTransactions.map(transaction => ( */}
              <tr className={styles.td}>
                <td className={styles.thData}>
                  {/* {transaction.date} */}
                  21.07.2021
                </td>
                <td className={styles.tdDesc}>
                  {/* <EllipsisText text={transaction.subCategory} length={'5'} /> */}
                  Subway
                </td>
                <td className={styles.thCateg}>
                  {/* {transaction.category} */}
                  Transport
                </td>
                <td
                  className={
                    `${styles.tdSum}`
                    //   ${
                    //     type !== 'income' && styles.tdSumExpense
                    //                   }`
                  }
                >
                  {/* <EllipsisText
                    text={
                      type === 'income'
                        ? `${transaction.sum.toLocaleString('ru')}.00 грн.`
                        : `-${transaction.sum.toLocaleString('ru')}.00 грн.`
                    }
                    length={'5'}
                  /> */}
                  16.00 uah
                </td>
                <td
                  className={styles.thIcon}
                  // onClick={() => handleEditClick(transaction)}
                >
                  <button className={styles.deleteBtn}></button>
                </td>
              </tr>
              {/* //   ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export { TransactionsTable };
