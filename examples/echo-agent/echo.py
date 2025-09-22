def echo_agent(input_text: str) -> str:
    """
    A simple Sentient Echo Agent.
    It just repeats back whatever the user says.
    """
    return f"Echo: {input_text}"


if __name__ == "__main__":
    user_input = input("Say something: ")
    print(echo_agent(user_input))
