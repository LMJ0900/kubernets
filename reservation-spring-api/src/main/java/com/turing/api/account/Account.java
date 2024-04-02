package com.turing.api.account;

import com.turing.api.board.Board;
import jakarta.persistence.OneToMany;
import lombok.*;

import java.time.LocalDateTime;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString(exclude = {"id"})
public class Account {
    private Long id;
    private String accountNumber;
    private String accountHolder;
    private Double balance;
    private LocalDateTime transactionDate;
    private String transation;

    private Board board;

    @Builder(builderMethodName = "builder")
    public Account(long id, String accountNumber,
                   String accountHolder, double balance,
                   LocalDateTime transactionDate, String transation) {
        this.id = id;
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
        this.transactionDate = transactionDate;
        this.transation = transation;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    @Override
    public String toString() {
        return "Account{" +
                "accountNumber='" + accountNumber + '\'' +
                ", accountHolder='" + accountHolder + '\'' +
                ", balance=" + balance +
                ", transactionDate=" + transactionDate +
                ", transation='" + transation + '\'' +
                '}'+'\n';
    }
}

