package com.turing.api.account;


import com.turing.api.common.AbstractService;
import com.turing.api.enums.Messenger;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
@Service
@RequiredArgsConstructor
public class AccountServiceImpl extends AbstractService<Account> implements AccountService {
    List<Account> accountList;
    List<Account> bankingHistory;
    String result = "";

    @Override
    public String deposit(Account account) {
        for(Account Account : accountList){
            if (Account.getAccountNumber().equals(account.getAccountNumber())){
                Account.setBalance(Account.getBalance() + account.getBalance());
                result = "입금 성공! "+ account.getBalance() + "원 입금";
                bankingHistory.add(Account.builder()
                        .accountNumber(account.getAccountNumber())
                        .balance(account.getBalance())
                        .transactionDate(LocalDateTime.now())
                        .transation("입금 금액 : ")
                        .build());
            }else {
                result = "없는 계좌입니다.";
            }
        }
        return result;
    }

    @Override
    public String withdraw(Account account) {
        for(Account Account : accountList){
            if (Account.getAccountNumber().equals(account.getAccountNumber())){
                Account.setBalance(Account.getBalance() - account.getBalance());
                result = "출금 성공! "+ account.getBalance() + "원 출금";
                bankingHistory.add(Account.builder()
                        .accountNumber(account.getAccountNumber())
                        .balance(account.getBalance())
                        .transactionDate(LocalDateTime.now())
                        .transation("출금 금액 : ")
                        .build());
            }else {
                result = "없는 계좌입니다.";
            }
        }

        return result;
    }

    @Override
    public String getBalance(String accountNumber) {
        String balance = "";
        for (Account Account : bankingHistory)   {
            if (Account.getAccountNumber().equals(accountNumber)) {
                balance += Account.getTransation() + (Account.getBalance()+"\n");
            }else {
                balance = "없는 계좌입니다.";
            }
        }
        return balance;
    }


    @Override
    public Map<String, ?> save(Account account) {
        accountList.add(account);
        return null;
    }

    @Override
    public Map<String, ?> findAll() throws SQLException {
        return null;
    }

    @Override
    public Map<String, ?> findById(Long id) {
        return null;
    }

    @Override
    public Map<String, ?> count() {
        return null;
    }

    @Override
    public Map<String, ?> getOne(String id) throws SQLException {
        return null;
    }

    @Override
    public Map<String, ?> delete(Account account) {
        return null;
    }

    @Override
    public Map<String, ?> existsById(Long id) {
        return null;
    }

}
