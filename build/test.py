
# AES 加密函数
def aes_encrypt(key, iv, plaintext):
    cipher = AES.new(key, AES.MODE_CBC, iv)
    ciphertext = cipher.encrypt(plaintext)
    return ciphertext

# AES 解密函数
def aes_decrypt(key, iv, ciphertext):
    cipher = AES.new(key, AES.MODE_CBC, iv)
    decrypted = cipher.decrypt(ciphertext)
    return decrypted

# 生成随机的 AES 密钥和 IV
def generate_aes_key_iv(password):
    # 生成 32 字节的密钥（AES-256）
    salt = b'salt_'
    key = PBKDF2(password, salt, dkLen=32)

    # 生成 16 字节的 IV
    iv = get_random_bytes(AES.block_size)

    return key, iv

# 测试加密解密过程
def test_aes():
    password = b'password'
    plaintext = b'Hello, AES encryption!'
    
    # 生成密钥和 IV
    key, iv = generate_aes_key_iv(password)
    print("AES Key:", key)
    print("AES IV:", iv)
    
    # 加密
    ciphertext = aes_encrypt(key, iv, plaintext)
    print("Ciphertext:", ciphertext)
    
    # 解密
    decrypted = aes_decrypt(key, iv, ciphertext)
    print("Decrypted:", decrypted.decode())

# 执行测试
if __name__ == "__main__":
    test_aes()
