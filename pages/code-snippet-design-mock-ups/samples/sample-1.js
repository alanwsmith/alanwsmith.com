import styles from './Styles1.module.css'

export default function Sample1() {
  return (
    <pre className={styles.sample_1_background}>
      <div className={styles.sample_1_row}>
        <span
          className={`
              ${styles.sample_1_line_number} 
              ${styles.sample_1_top_line}
              `}
        >
          1
        </span>
        <span className={styles.sample_1_line_content}>
          <span className="token keyword">function</span>
          <span className="token plain"> </span>
          <span className="token function">get_random_number</span>
          <span className="token punctuation">(</span>
          <span className="token parameter">max_number</span>
          <span className="token punctuation">)</span>
          <span className="token plain"> </span>
          <span className="token punctuation">{'{'}</span>
          <span className="token plain"></span>
        </span>
      </div>
      <div className={styles.sample_1_row}>
        <span className={styles.sample_1_line_number}>2</span>
        <span className={styles.sample_1_line_content}>
          <span className="token plain">&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span className="token keyword">return</span>
          <span className="token plain"> Math</span>
          <span className="token punctuation">.</span>
          <span className="token function">floor</span>
          <span className="token punctuation">(</span>
        </span>
      </div>
      <div className={styles.sample_1_row}>
        <span className={styles.sample_1_line_number}>3</span>
        <span className={styles.sample_1_line_content}>
          <span className="token plain">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="token punctuation">(</span>
          <span className="token plain">Math</span>
          <span className="token punctuation">.</span>
          <span className="token function">random</span>
          <span className="token punctuation">(</span>
          <span className="token punctuation">)</span>
          <span className="token plain"> </span>
          <span className="token operator">*</span>
          <span className="token plain"> max_number</span>
          <span className="token punctuation">)</span>
          <span className="token plain"> </span>
          <span className="token operator">+</span>
          <span className="token plain"> </span>
          <span className="token number">1</span>
        </span>
      </div>
      <div className={styles.sample_1_row}>
        <span className={styles.sample_1_line_number}>4</span>
        <span className={styles.sample_1_line_content}>
          <span className="token plain">&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span className="token punctuation">)</span>
        </span>
      </div>
      <div className={styles.sample_1_row}>
        <span className={styles.sample_1_line_number}>5</span>
        <span className={styles.sample_1_line_content}>
          <span className="token plain"></span>
          <span className="token punctuation">{'}'}</span>
        </span>
      </div>
      <div className={styles.sample_1_row}>
        <span className={styles.sample_1_line_number}>6</span>
        <span className={styles.sample_1_line_content}></span>
      </div>

      <div className={styles.sample_1_row}>
        <span
          className={`${styles.sample_1_line_number} ${styles.sample_1_last_line}`}
        >
          7
        </span>
        <span className={styles.sample_1_line_content}>
          <span className="token plain">console</span>
          <span className="token punctuation">.</span>
          <span className="token function">log</span>
          <span className="token punctuation">(</span>
          <span className="token function">get_random_number</span>
          <span className="token punctuation">(</span>
          <span className="token number">100</span>
          <span className="token punctuation">)</span>
          <span className="token punctuation">)</span>
        </span>
      </div>
      <div className={styles.sample_1_output_line}>
        <span className={styles.sample_1_line_number_output}>&gt;</span>
        <span className={styles.sample_1_line_content}>27</span>
      </div>
    </pre>
  )
}
