
# Commitment Scheme

## Example

If two people, Alice and Bob, were to bet on a coin flip, the process could go 
as follows: Alice calls the side the coin will land on before the flip, Bob
then flips the coin and the result is determined. Here's where we add a little
wrinkle. Suppose that Alice is somewhere else and can't see the coin flip. Now,
Bob can lie about the result of the flip and win the bet every time! A quick
solution might be to let Alice to call the flip after Bob says what side it
landed on, but obviously that would just let Alice cheat.

## Problem

We can phrase our problem by listing our requirements:
1. Alice has to be able to provide her information ahead of time so she can't
cheat by knowing the result.
2. Bob has to be unable to know the information given by Alice when he flips
the coin so he can't lie about the result.
3. The information given by Alice has to be able to be revealed by Alice
after the flip without being modified.

## Solution

The solution to our problem is to use a commitment scheme. A commitment
scheme is an idea in cryptography consisting of two phases:
committing and revealing. In the committing phase, a value is chosen and
"committed" to, in the sense that it cannot be changed without starting
this process over. Value here is a general term for any data.
At a later point, we go to the revealing phase where the sender of the
value reveals the value's unencrypted form for the receiver.

## Example

Let's go through what this might look like.

1. I have a secret that I encrypt.

           Me
          Heads
           |
           V
        +-----+      +-----+
        |     |  ->  | ??? |
        |     |      |     |
        +-----+      +-----+

2. I pass off the encrypted data to you
 
          Me           You
             
             
        +-----+      +-----+
        | ??? |  ->  | ??? |
        |     |      |     |
        +-----+      +-----+

3. You perform whatever you need to

          You              
         coin flip -> Ⓗ
             
        +-----+
        | ??? |
        |     |
        +-----+

4. I give you the means to decrypt my data, revealing its information

           You              
           Ⓗ
             
        +-----+       +-----+
        | ??? |   ->  |Heads|
        |     |       |     |
        +-----+       +-----+

5. Now we can both agree that neither party has cheated by
allowing the information to be set, hidden, and revealed at
the proper times.

## Application

This kind of scheme may seem contrived and only useful in strange
coin-flipping conundrums, but one case where this setup shines is
in zero-knowledge proofs. Zero-knowledge proofs are a topic for
another time, but suffice it to say that there is a method of
asserting that a proof exists while not giving any knowledge of how.
Such a method uses the ability of fixing a value then revealing it
to work.

## Conclusion

I hope this was fun!
