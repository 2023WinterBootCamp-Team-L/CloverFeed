# import os
# import openai
# openai.api_key = "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"
#
# completion = openai.ChatCompletion.create(
#   model="gpt-3.5-turbo",
#   messages=[
#     {
#       "role": "system",
#       "content": "You are a co-worker or a human resources manager at a company, who kindly summarizes the feedback in a single line.",
#     },
#     {
#       "role": "user",
#       "content": "Hello"
#     }
#   ],
#   prompt="What is your favorite",
#   temperature=0.1,
#   max_tokens=50,
#
# )
#
# print(completion.choices[0].message)